import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserIsMounted, userActions } from 'entities/User'
import { useTheme } from './providers/ThemeProvider'

function App() {
	const { theme } = useTheme()
	const dispatch = useDispatch()
	const isMounted = useSelector(getUserIsMounted)

	useEffect(() => {
		dispatch(userActions.initAuthData())
	}, [dispatch])

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<Navbar />
				<div className="content-page">
					<Sidebar />
					{isMounted && <AppRouter />}
				</div>
			</Suspense>
		</div>
	)
}

export default App
