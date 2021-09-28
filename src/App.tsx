import { routes } from "./utils/routes"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Redirect to={routes.main.path} />
				</Route>
				<Route exact path={routes.main.path} component={routes.main.component} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
