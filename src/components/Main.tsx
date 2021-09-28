interface appProps {
	weather: number
}

const Main = ({ weather }: appProps) => {
	return <h1>{weather}</h1>
}

export default Main
