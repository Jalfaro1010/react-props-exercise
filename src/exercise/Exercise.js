// 3B function Exercise({ good, bad}) {


// 1A and 3D
function Exercise({ good = "Great", bad = "Not Great" }) {
    // 2A
      return (
        <div>
          {/* 
          <h1>Great</h1>
          <h1>Not Great</h1>
          */}
    
          {/* 3C */}
          <h1>{good}</h1>
          <h1>{bad}</h1>
        </div>
      );
    }
    
    // 1B
    export default Exercise;