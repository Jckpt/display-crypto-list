import { useState } from "react"
import { useQuery } from "react-query"
import Table from "./Table"
import PageButtons from "./PageButtons"
import "./App.css"
const fetchCoins = async (page) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`
  )
  return response.json()
}

function App() {
  const [page, setPage] = useState(1)
  const { isLoading, isError, data, error, isPreviousData } = useQuery(
    ["coins", page],
    () => fetchCoins(page),
    { keepPreviousData: true }
  )
  return (
    <div className='flex items-center justify-center flex-col w-full'>
      <PageButtons
        setPage={setPage}
        page={page}
        isPreviousData={isPreviousData}
      />
      {isLoading ? "Loading..." : <Table data={data} page={page} />}
      <PageButtons
        setPage={setPage}
        page={page}
        isPreviousData={isPreviousData}
      />
    </div>
  )
}

export default App
