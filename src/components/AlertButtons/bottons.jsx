import Button from "../AlertButton"

const buttonLabel = ['Clique aqui', 'Baixar CV']

const Buttons =() => {
    return (
        <>
        <h3>Botões</h3>
        <div>{
              buttonLabel.map((buttonLabel, index) => 
                <Button label={(buttonLabel)} key={(index)}/>)
            }</div>
      
        </>
    )
}

export default Buttons