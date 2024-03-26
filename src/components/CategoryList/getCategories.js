export const getCategories = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/categories`, { cache: 'no-store' });

	if (!res.ok) {
		throw new Error('Failed');
	}

	const data = await res.json();

	return data;
};
