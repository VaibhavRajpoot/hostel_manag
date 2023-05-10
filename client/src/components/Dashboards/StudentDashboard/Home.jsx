// import { Doughnut } from "react-chartjs-2";
// import 'chart.js/auto'; 

function Home() {
  let user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-white font-bold text-5xl">
          Welcome <span className="text-blue-700">Student!</span>
        </h1>
  =======
      <div className="w-full h-screen flex items-center justify-center" >
          <h1 className="text-gray-900 font-bold text-5xl" >Welcome <span className="text-blue-500">{user.email}</span></h1>
      </div>
    </>
  );
}

export default Home;
