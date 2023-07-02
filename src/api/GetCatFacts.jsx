import { useQuery } from "@tanstack/react-query"


function GetCatFact() {
    const { isLoading, error, data } = useQuery(['repoData'], () =>
      fetch('https://catfact.ninja/fact').then(res =>
        res.json()
      )
    )
  
    if (isLoading) return 'Loading...'
  
    if (error) return 'An error has occurred: ' + error.message
  
    return (
      <div>
        <h1>Here is a Cat Fact</h1>
        <p>{data.fact}</p>
      </div>
    )
  }

export default GetCatFact
