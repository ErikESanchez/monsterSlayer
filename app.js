new Vue({
    el: '#app',
    data: {

    },
    methods: {
        attackDamage: function () {
            let attackToMonster = Math.floor(Math.random() * -10);
            let attackFromMonster = Math.floor(Math.random() * -7);
            console.log(attackToMonster);
            console.log(attackFromMonster);
        },
        specialAttackDamage: function () {
            let specialAttackDamageToMonster = Math.floor(Math.random() * -15);
            let specialAttackDamageFromMonster = Math.floor(Math.random() * -11);
            console.log(specialAttackDamageToMonster);
            console.log(specialAttackDamageFromMonster);
        },
        healPlayer: function () {
            let healPlayer = Math.floor(Math.random() * 11);
            let attackPlayerWhileHealing = Math.floor(Math.random() * -4);
            console.log(healPlayer);
            console.log(attackPlayerWhileHealing);
        },
    }
});