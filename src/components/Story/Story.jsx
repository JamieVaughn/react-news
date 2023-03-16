import { useParams, useSearchParams } from 'react-router-dom'

export function Story () {
  const params = useParams()
  const [queryString, setQueryString] = useSearchParams()
  // console.log(params, queryString.get('url'))
  const text = queryString.get('text')
  const url = queryString.get('url')
  // if(text) {
    // console.log(text)
    // return (
      // <p>{text}</p>
      // <p dangerouslySetInnerHTML={{__html: '<div>Hello World, <strong>Awesome Job</strong></div>'}}></p>
    // )
  // }

  return (
    <div>
      {url ? 
      <a href={url}>Go to Source URL: {params.storyId}</a>
      : 'No source found'}
    </div>
  )
}