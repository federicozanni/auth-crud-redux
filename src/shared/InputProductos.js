import React from 'react'

const InputProductos = ({title, alerta, nombre, precio, changePrecio, changeNombre, submitNuevoProducto, cargando, error, buttonSubmitText}) => {

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center md-4 font-weight-bold">
              {title}
            </h2>

            {
              alerta && <p className={alerta.classes}>{alerta.msg}</p>
            }

            <form
              onSubmit={submitNuevoProducto}
            >
              <div className="form-group">
                <label>Nombre Producto</label>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={changeNombre}
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input 
                  type="number" 
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={changePrecio}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase"
              >
                {buttonSubmitText}
              </button>
            </form>

            {
              cargando && <p>Cargando...</p>
            }

            {
              error && <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputProductos;