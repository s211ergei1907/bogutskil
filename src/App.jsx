import { Menu } from "./Menu";

function App() {
  const title = "Привет, мир!";
  const version = 2;
  const flag = true;
  const owner = {
    parent1: "mama",
    age: 42,
  };
  //Массив объектов
  const courses = [
    { name: "Сергей", age: 21, married: true },
    { name: "Денис", age: 19, married: false },
    { name: "Андрей", age: 20, married: true },
  ];
  
  const arr = ['Js', 'React', 'QA'];
  return (
    <div className="App">
      <Menu title={title} version={version} flag={flag} owner={owner} arr={arr} courses={courses}/>
    </div>
  );
}

export default App;
