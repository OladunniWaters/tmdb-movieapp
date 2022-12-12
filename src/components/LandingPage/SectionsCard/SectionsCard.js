import './SectionsCard.css';


export default function SectionsCard({ movie }) {
  const {id, poster_path , backdrop_path, original_title,  overview } = movie
  
  return (
    <div id={id}>
          <div class="container text-center">
            <div class="row align-items-start">
              <div class="col">
                   <div class="card" style={{width:"18rem"}}>
                        <img src={poster_path + backdrop_path} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">{original_title}</h5>
                          <p class="card-text">{overview}</p>
                        </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  );
}
