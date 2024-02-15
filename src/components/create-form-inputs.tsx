import { useState } from "react"

export function CreateFormInputs() {
    const [elementInputOption, setElementInputOption] = useState([
        {
            id: 1,
            label: `Opção 1`,
            name: 'opcao-1',
        }
    ])

    function handleNewOptionInputButton() {
        const newOptionId = elementInputOption.length + 1
        if(newOptionId > 5){
            return;
        }
        const newOption = {
            id: newOptionId,
            label: `Opção ${newOptionId}`,
            name: `opcao-${newOptionId}`,
        }

        setElementInputOption([...elementInputOption, newOption])


    }


    return(
        <div className="flex flex-1 flex-col ">
            <div className="absolute top-5 left-5">
                <button onClick={handleNewOptionInputButton} className="m-0 bg-opacity-60 rounded-md p-3 414:text-xl font-medium bg-slate-100/70 hover:ring-2 ">
                    <span>Criar uma nova opção</span>
                </button>

            </div>
            <div className="flex-1 flex flex-col gap-5 w-full">
                <form className="flex-1 flex-col flex w-1/2 mx-auto gap-2 ">
                    {
                        elementInputOption.map((input) => (
                            <div className=" flex flex-1 flex-col gap-2 rounded-md border-slate-500 border-solid border-[1px]">
                                <div key={input.id} className="flex-1 flex-col flex gap-3 ml-1 px-2 pb-2">
                                    <label htmlFor={input.name}>{input.label}</label>
                                    <input type="text" className="outline-none " name={input.name} placeholder="Digite a opção:"/>
                                </div>

                            </div>
                        ))
                    }

                    
                </form>

            </div>
        </div>
    )
}