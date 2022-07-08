/**
 * @file  mofron-comp-extendline/index.js
 * @brief extend line component for mofron
 * @attention 
 * @license MIT
 */
const Width = require('mofron-effect-width');

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) ratio parameter
     *                key-value: component option
     * @short ratio
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("ExtendLine");
            this.shortForm("thickness");
            
	    /* set config */
	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            //this.size('0rem','0.01rem');
	    this.config({
                baseColor: '#5a5a96',
                effect: [
                    new Width({ speed: 200, eid: 0, toValue: '100%' }),
                    new Width({ speed: 200, eid: 1, toValue: '0rem' }),
                ]
            });
	    this.size('1rem','0.01rem');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    thickness (prm, opt) {
        try {
            return this.height(prm,opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    width (prm) {
        try {
            return this.length(prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    length (prm) {
        try {
            return this.effect({ modname:'Width', eid:0 }).toValue(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    speed (prm) {
        try {
            this.effect({ modname:'Width', eid:0 }).speed(prm);
            return this.effect({ modname:'Width', eid:1 }).speed(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
