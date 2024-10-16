import './App.css';
import './sklep';
import Sklep from "./sklep";
import gruszka from './gruszka.jpg';
import koper from './koper.jpg';
import marchew from './marchew.jpg';
import morela from './morela.jpg';
import owoce from './owoce.jpg';
import papaja from './papaja.jpg';
import papryka from './papryka.jpg';
import ziemniak from './ziemniak.jpg';

const sklep = [
  {photo:gruszka, name:"gruszka", desc:"gruszka", num:"30", price:"1,30"},
  {photo:koper, name:"koper", desc:"koper", num:"20", price:"1,70"},
  {photo:marchew, name:"marchew", desc:"marchew", num:"34", price:"2,30"},
  {photo:morela, name:"morela", desc:"morela", num:"12", price:"3,30"},
  {photo:owoce, name:"owoce", desc:"owoce", num:"3033", price:"10,30"},
  {photo:papaja, name:"papaja", desc:"papaja", num:"4", price:"4,30"},
  {photo:papryka, name:"papryka", desc:"papryka", num:"32", price:"2,30"},
  {photo:ziemniak, name:"ziemniak", desc:"ziemniak", num:"50", price:"3,30"},

]

const App = () => (
  <div className="App">
    <div className="header">
      <div className="left">
        <h1>Internetowy sklep z eko-warzywami</h1>
      </div>
      <div className="right">
        <ol>
          <li>warzywa</li>
          <li>owoce</li>
          <li><a href="soki">soki</a></li>
        </ol>
      </div>
    </div>
    <div className="main">
      <table>
        <tbody>
        <tr>
          <td><Sklep photo={sklep[0].photo} name={sklep[0].name} desc={sklep[0].desc} num={sklep[0].num} price={sklep[0].price}/></td>
          <td><Sklep photo={sklep[1].photo} name={sklep[1].name} desc={sklep[1].desc} num={sklep[1].num} price={sklep[1].price}/></td>
          <td><Sklep photo={sklep[2].photo} name={sklep[2].name} desc={sklep[2].desc} num={sklep[2].num} price={sklep[2].price}/></td>
          <td><Sklep photo={sklep[3].photo} name={sklep[3].name} desc={sklep[3].desc} num={sklep[3].num} price={sklep[3].price}/></td>
        </tr>
        <tr>
          <td><Sklep photo={sklep[4].photo} name={sklep[4].name} desc={sklep[4].desc} num={sklep[4].num} price={sklep[4].price}/></td>
          <td><Sklep photo={sklep[5].photo} name={sklep[5].name} desc={sklep[5].desc} num={sklep[5].num} price={sklep[5].price}/></td>
          <td><Sklep photo={sklep[6].photo} name={sklep[6].name} desc={sklep[6].desc} num={sklep[6].num} price={sklep[6].price}/></td>
          <td><Sklep photo={sklep[7].photo} name={sklep[7].name} desc={sklep[7].desc} num={sklep[7].num} price={sklep[7].price}/></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default App;
