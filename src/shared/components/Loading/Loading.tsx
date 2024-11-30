import { GridLoader } from 'react-spinners';
import * as sc from './styles';

const Loading = () => {
  return (
    <sc.Loading>
      <GridLoader size={20} color={"#2980b9"}/>
    </sc.Loading>
  )
}

export default Loading;