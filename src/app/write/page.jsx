'use client'

import 'react-quill/dist/quill.bubble.css'

import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { useEffect, useMemo, useState } from 'react'

import Image from 'next/image'
import { app } from '@/utils/firebase'
import dynamic from 'next/dynamic'
import { getCategories } from '@/components/CategoryList/getCategories'
import styles from './writePage.module.scss'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const storage = getStorage(app)

const WritePage = () => {
	const [categories, setCategories] = useState([])
	useEffect(() => {
		getCategories().then((data) => {
			setCategories(data)
		})
	}, [])

	const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), [])
	const [file, setFile] = useState(null)
	const [media, setMedia] = useState('')

	const [open, setOpen] = useState(false)
	const [value, setValue] = useState('')
	const [title, setTitle] = useState('')
	const [category, setCategory] = useState('')

	const { status } = useSession()

	const router = useRouter()

	useEffect(() => {
		const upload = () => {
			const fileName = `${new Date().getTime()}-${file.name}`
			const storageRef = ref(storage, fileName)

			const uploadTask = uploadBytesResumable(storageRef, file)

			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
					console.log('Upload is ' + progress + '% done')
					switch (snapshot.state) {
						case 'paused':
							console.log('Upload is paused')
							break
						case 'running':
							console.log('Upload is running')
							break
					}
				},
				(error) => {
					console.error(error.message)
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
						setMedia(downloadURL)
					})
				}
			)
		}

		file && upload()
	}, [file])

	if (status === 'loading') {
		return <div className={styles.loading}>Loading...</div>
	}

	if (status === 'unauthenticated') {
		router.push('/')
	}

	const slugify = (str) =>
		str
			.toLowerCase()
			.trim()
			.replace(/[^\w\s-]/g, '')
			.replace(/[\s_-]+/g, '-')
			.replace(/^-+|-+$/g, '')

	const handleSubmit = async () => {
		const res = await fetch('/api/posts', {
			method: 'POST',
			body: JSON.stringify({
				title,
				desc: value,
				img: media,
				slug: slugify(title),
				catSlug: category,
			}),
		})

		const data = await res.json()

		data.slug && router.push('/posts/' + data.slug)
	}

	return (
		<div className={styles.container}>
			<input
				type='text'
				placeholder='Title'
				className={styles.input}
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>

			<select name='category' value={category} onChange={(e) => setCategory(e.target.value)}>
				<option value=''>Select a category</option>
				{categories.length > 0 &&
					categories.map((item) => (
						<option value={item.title} key={item.id}>
							{item.title}
						</option>
					))}
			</select>

			<div className={styles.editor}>
				<button className={styles.button} onClick={() => setOpen(!open)}>
					<Image src='/plus.png' alt='' width={16} height={16} className={styles.image} />
				</button>
				{open && (
					<div className={styles.add}>
						<input
							type='file'
							id='inputImage'
							onChange={(e) => setFile(e.target.files[0])}
							className={styles.imageInput}
						/>
						<label htmlFor='inputImage' className={styles.addButton}>
							<Image src='/image.png' alt='' width={16} height={16} className={styles.image} />
						</label>
						<button className={styles.addButton}>
							<Image src='/external.png' alt='' width={16} height={16} className={styles.image} />
						</button>
						<button className={styles.addButton}>
							<Image src='/video.png' alt='' width={16} height={16} className={styles.image} />
						</button>
					</div>
				)}
				{document ? (
					<ReactQuill
						theme='bubble'
						value={value}
						onChange={setValue}
						placeholder='Tell your story...'
						className={styles.textArea}
					/>
				) : null}
			</div>
			<button className={styles.publish} onClick={handleSubmit}>
				Publish
			</button>
		</div>
	)
}

export default WritePage
