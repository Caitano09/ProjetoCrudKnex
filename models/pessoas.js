const findAll = async(connection) => {
    const pessoas = await connection('pessoas').select('*')
    return pessoas
}

const findById = async(connection, idPessoa) => {
    const pessoa = await connection('pessoas').where({id: idPessoa}).select('*')
    if(pessoa.length > 0){
        return pessoa[0]
    }else{
        return {}
    }

}

const deleteOne = async(connection, idPessoa) => {
    await connection('pessoas').where({id: idPessoa}).delete()
}

const create = async(connection, data) => {
    await connection('pessoas').insert({
        nome: data.nome,
        nascimento: data.nascimento,
        cargo: data.cargo
    })
}

const update = async(connection, idPessoa, data) => {
    await connection('pessoas').where({id: idPessoa}).update({
        nome: data.nome,
        nascimento: data.nascimento,
        cargo: data.cargo
    })
}
module.exports = {
    findAll,
    findById,
    deleteOne,
    create,
    update
}