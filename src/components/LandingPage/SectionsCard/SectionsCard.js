import './SectionsCard.css';


export default function SectionsCard({ movie }) {
  const {path , backdrop_path, original_title,  overview } = movie
  
  return (
           <div className="card_container">
              <div className="card" style={{width:"18rem"}}>
                  <img src={"https://image.tmdb.org/t/p/w500" + backdrop_path} alt={path} />
                      <div className="card-body">
                         <h5 className="card-title">{original_title}</h5>
                          <p className="card-text">{overview}</p>
                      </div>
                 </div>
           </div>
  );
}
