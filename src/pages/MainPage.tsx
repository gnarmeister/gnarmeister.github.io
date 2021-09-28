import Main from "../components/Main"
import { useState } from "react"
import { WEATHER } from "../utils/constants"

const MainPage = () => {
	const [weather, setWeather] = useState(WEATHER.clear)

	return <Main weather={weather} />
}
export default MainPage
