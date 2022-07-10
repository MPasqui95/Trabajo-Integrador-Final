module.exports =(sequelize, dataTypes) =>{
        let alias = "Productos";
        let cols= {
            id:{
            type: dataTypes.INTEGER(10),
            primaryKey:true,
            autoIncrement: true
            },
            name:{
            type: dataTypes.STRING(100)
            },
             
            regularPrice:{
            type: dataTypes.DECIMAL(10,2),
            },
             
            offerPrice:{
            type: dataTypes.DECIMAL(10,2),
            },
             
            discount:{
            type: dataTypes.DECIMAL(10,2),
            },
             
            image:{
                type: dataTypes.BLOB('medium'),
                allowNull: true 
            }, 
            specification :{
            type: dataTypes.STRING(100)
            
            },
            stock:{
            type: dataTypes.INTEGER(3)
            },
             
            categoríasBrands_id:{
            type: dataTypes.INTEGER(2)
            },
             
            categoríasProductos_id:{
                type: dataTypes.INTEGER(2)
            },
             
            productsImage_id:{
            type: dataTypes.INTEGER(5)
            },
             

        } 
        let config ={
            tableName: "products",
            timestamps: false
        }

    const Producto = sequelize.define(alias,cols,config);

    return Producto
}