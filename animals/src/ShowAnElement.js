import bro from './svg/bro.png'
import bromium from './svg/bromium.png'
import broski from './svg/broski.png'
import bruddah from './svg/bruddah.png'
import bruv from './svg/bruv.png'
import feet from './svg/feet.png'
import {useState} from 'react'

const pngMap = {
  bro,
  bromium,
  broski,
  bruddah,
  bruv
};

function ShowAnElement({type})
{
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1)
  };

  return (
    <div onClick = {handleClick} style = {{position: 'relative'}}>
      <img src = {pngMap[type]} />
      <div style = {{position: 'absolute', bottom: 0}}>
        <img src = {feet} style = {{width: 10 * clicks}} />
      </div>
    </div>
  );
}

export default ShowAnElement;