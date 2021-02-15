class apiKlaidos{
    constructor(kodas, pranesimas){
        this.kodas = kodas;
        this.pranesimas = pranesimas;
    }

    static blogaUzklausa(pranesimas){
        return new apiKlaidos(400, pranesimas);
        
    }

    static vidineKlaida(pranesimas){
        return new apiKlaidos(500, pranesimas);
    }
}

module.exports = apiKlaidos;