import './globals.scss';

import Footer from '@/components/Footer/Footer';
import { Inter } from 'next/font/google';
import NavBar from '@/components/NavBar/NavBar';
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';
import { cookies } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Wedding Blog',
	description: 'The best blog app!',
};

export default function RootLayout({ children }) {
	const cookieStore = cookies();
	const theme = Boolean(cookieStore.get('theme')) ? cookieStore.get('theme').value : 'light';

	return (
		<html lang='en'>
			<body className={inter.className}>
				<ThemeContextProvider themeCookie={theme}>
					<ThemeProvider>
						<div className='container'>
							<div className='wrapper'>
								<NavBar />
								{children}
								<Footer />
							</div>
						</div>
					</ThemeProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
