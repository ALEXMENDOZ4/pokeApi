import * as sc from './styles';

interface Iinput{
    value: string;
    onchange:  React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input = ({ value, onchange }: Iinput) => {
  return (
    <sc.Input value={value} onChange={onchange} type="text" placeholder='Buscador'/>
  )
}

export default Input;