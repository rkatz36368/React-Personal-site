import React from 'react'
import CV from '../../assets/pdfs/Curriculo_Rafael_Katz_2022.pdf'

const CTA = () => {
    return (
        <div className="cts">
            <a href={CV} download className="btn">Baixar Currículo</a>
            <a href="#contact"className="btn btn-primary">Contate-me</a>
        </div>
    )
}

export default CTA
