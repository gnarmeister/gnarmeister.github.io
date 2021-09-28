import Main from "../components/Main"
import { useState } from "react"
import { Weather } from "../utils/constants"

const MainPage = () => {
	const [weather, setWeather] = useState<Weather>(Weather.clear)

	return <Main weather={weather} setWeather={setWeather} />
}
export default MainPage
