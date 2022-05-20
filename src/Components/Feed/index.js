import React from "react";
import { Container, Pfim } from "../../globalStyles";
import Fotos from "./Fotos";
import Modal from "./Modal";

const Feed = ({ id }) => {
  const [modalFoto, setModalFoto] = React.useState(null);
  const [pagina, setPagina] = React.useState([1]);
  const [infinito, setInfinito] = React.useState(true);

  React.useEffect(() => {
    let esperar = false;
    const scrollInfinito = () => {
      if (infinito) {
        const scroll = window.scrollY;
        const alturaPg = document.body.offsetHeight - window.innerHeight;

        const fimPg = scroll > alturaPg * 0.75;
        if (fimPg && !esperar) {
          setPagina((pagina) => [...pagina, pagina.length + 1]);
          esperar = true;
          setTimeout(() => {
            esperar = false;
          }, 500);
        }
      }
    };

    window.addEventListener("wheel", scrollInfinito);
    window.addEventListener("scroll", scrollInfinito);

    return () => {
      window.removeEventListener("wheel", scrollInfinito);
      window.removeEventListener("scroll", scrollInfinito);
    };
  }, [infinito]);

  return (
    <Container as={id ? "div" : "section"} mT={id ? false : true}>
      {pagina.map((pg) => {
        return (
          <Fotos
            key={pg}
            pg={pg}
            user={id ? id : 0}
            setModalFoto={setModalFoto}
            setInfinito={setInfinito}
          />
        );
      })}
      {modalFoto ? (
        <Modal foto={modalFoto} setModalFoto={setModalFoto} />
      ) : undefined}
      {!infinito ? <Pfim>Não existe mais postagem. </Pfim>: undefined}
    </Container>
  );
};

export default Feed;
