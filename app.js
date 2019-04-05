new Vue({
    el: '#app',
    data: {
        playerHealth: 80,
        monsterHealth: 80
    },
    methods: {
        attackDamage() {
            let attackToMonster = Math.floor(Math.random() * -10);
            let attackFromMonster = Math.floor(Math.random() * -7);
            this.playerHealth >= 0;
            this.playerHealth = this.playerHealth + attackFromMonster;
            this.monsterHealth = this.monsterHealth + attackToMonster;
            console.log("Player Health: " + this.playerHealth);
            console.log("Monster Health: " + this.monsterHealth);
        },
        specialAttackDamage: function () {
            let specialAttackDamageToMonster = Math.floor(Math.random() * -15);
            let specialAttackDamageFromMonster = Math.floor(Math.random() * -11);
            this.playerHealth = this.playerHealth + specialAttackDamageFromMonster;
            this.monsterHealth = this.monsterHealth + specialAttackDamageToMonster;
            console.log("Player Health: " + this.playerHealth);
            console.log("Monster Health: " + this.monsterHealth);
        },
        healPlayer: function () {
            let healPlayer = Math.floor(Math.random() * 11);
            let attackPlayerWhileHealing = Math.floor(Math.random() * -4);
            this.playerHealth = this.playerHealth + healPlayer + attackPlayerWhileHealing;
            console.log("Player Health " + this.playerHealth);
        },
        reset() {
            this.playerHealth = 80,
            this.monsterHealth = 80
        }
    },
    computed: {
        healthPlayer() {
            return {width: this.playerHealth + '%'}
        },
        healthMonster() {
            return {width: this.monsterHealth + '%'}
        }
    }

});