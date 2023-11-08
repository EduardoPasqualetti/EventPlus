import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Titulo from '../../components/Titulo/Titulo'

const TestePage = () => {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [total, setTotal] = useState()

    function handleCalcular(e) {
        e.preventDefault();
        setTotal(parseFloat(n1) + parseFloat(n2));
        
    }

    return (
        <div>
            <Header />
            <Titulo titleText={"Teste Page"} className='margem_acima'/>
            <h1>Pagina de Poc`s</h1>

            <h2>Calculator</h2>
            <form onSubmit={handleCalcular}>
                <Input
                    type="number"
                    placeholder="Digite o numero"
                    name="n1"
                    id="n1"
                    value={n1}
                    onChange={(e) => { setN1(e.target.value) }}
                />

                <br /><br />

                <Input
                    type="number"
                    placeholder="Digite o numero"
                    name="n2"
                    id="n2"
                    value={n2}
                    onChange={(e) => { setN2(e.target.value) }}
                />

                <br /><br />
                <Button
                    textButton="Calcular"
                    type="submit"
                />
            </form>
           
            <br />
            <span> Total : <strong > {total} </strong></span>


        </div>
    );
};

export default TestePage;