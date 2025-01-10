import {useEffect} from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card } from '../components';
import { useFetch } from '../hooks/useFetch';

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const {data: movies} = useFetch(apiPath, queryTerm);

  useEffect(()=>{
    document.title = `Search result for ${queryTerm}`;
  });

  return (
    <main className="container">
      <h3 className="text-primary border-bottom py-2">Search</h3>
      {movies.length == 0 ? `No Result Found for ${queryTerm}` : `Result for ${queryTerm}`}
      <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 py-2'>
          {movies.map((movie)=>{
            return <Card key={movie.id} movie={movie}/>
            })}
      </div>
    </main>
  )
}
