const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    // INSERIR DADOS NA TABELA
    await saveOrphanage(db, {
        lat: "38.6509192",
        lng: "-9.1699202",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "987123456",
        images: [
            "https://images.unsplash.com/photo-1595295403848-3f1d04c4e95e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1602984689185-17bb08df694d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"
    })

    // CONSULTAR DADOS NA TABELA
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // CONSULTAR SOMENTE 1 ORPHANATO, PELO ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    // DELETAR DADO DA TABELA
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))

})