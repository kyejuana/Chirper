import React from "react";

const Chirp = (props) => {
  return (
    <>
    <div id="timeline-card">
    
    <div class="col-sm-12">
    <div class="width 250px">
    <div class="card-body">
    <h5 class="card-title">{props.content}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{props.username}</h6>
    <p class="card-text">{props.timestamp}</p>
    
    </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Chirp;