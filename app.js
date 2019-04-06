new Vue({
    el: '#app',
    data: {
        playerHealth: 80,
        monsterHealth: 80,
    },
    methods: {
        checkBelowZero(val) {
            if (val < 0) {
                return true;
            } else {
                return false;
            }
        },
        humanAttack(attack) {
            let attackToMonster = Math.floor(Math.random() * -attack);
            return attackToMonster;
        },
        monsterAttack(attack) {
            let attackFromMonster = Math.floor(Math.random() * -attack);
            return attackFromMonster
        },
        endGame() {
            if (this.monsterHealth == 0) {
                return console.log("DONE!");
            } else {
                console.log("NOT DONE!")
            }
        },
        attackDamage() {
            if (this.checkBelowZero(this.playerHealth) || this.checkBelowZero(this.monsterHealth)) {
                this.monsterHealth = 0;
                // this.playerHealth = 0;
                console.log("You've won!");
                endGame();
            } else {
                this.playerHealth = this.playerHealth + this.monsterAttack(7);
                this.monsterHealth = this.monsterHealth + this.humanAttack(10);
                console.log("Player Health: " + this.playerHealth);
                console.log("Monster Health: " + this.monsterHealth);
            }
        },
        specialAttackDamage: function () {
            if (this.checkBelowZero(this.playerHealth) || this.checkBelowZero(this.monsterHealth)) {
                this.monsterHealth = 0;
                // this.playerHealth = 0;
                console.log("You've won");
                this.endGame();
            } else {
                this.playerHealth = this.playerHealth + this.monsterAttack(11);
                this.monsterHealth = this.monsterHealth + this.humanAttack(15);
                console.log("Player Health: " + this.playerHealth);
                console.log("Monster Health: " + this.monsterHealth);
            }
        },
        healPlayer: function () {
            let healPlayer = Math.floor(Math.random() * 11);
            let attackPlayerWhileHealing = Math.floor(Math.random() * -4);
            this.playerHealth = this.playerHealth + healPlayer + attackPlayerWhileHealing;
            console.log("Player Health: " + this.playerHealth);
        },
        giveUp() {
            this.playerHealth = 0;
            // this.monsterHealth;
        },
        reset() {
            this.playerHealth = 80;
            this.monsterHealth = 80;
        },

    },
    computed: {
        healthPlayer() {
            return {
                width: this.playerHealth + '%'
            }
        },
        healthMonster() {
            return {
                width: this.monsterHealth + '%'
            }
        }
    }
});