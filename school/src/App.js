import logo from './logo.svg';
import './App.css';
// import profile from './images/profile.avif'
import proimg from './images/student-profile-1.jpg'

function App() {
  return (
    <>
    
      <section className='card'>
        <section className='card-img'>
                <img src={proimg} />
        </section>
        <section className='card-footer'>
              <button>Add To Cart</button>
        </section>
      </section>
    </>
  );
}

export default App;
