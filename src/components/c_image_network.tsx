import meAbidzar from "../assets/imgs/me_abidzar.png";
import showcasePlain from "../assets/imgs/showcase_plain.png";
import showcaseBlumb1 from "../assets/imgs/blumb1.png";
import showcaseBlumb2 from "../assets/imgs/blumb2.png";
import showcaseBlumb3 from "../assets/imgs/blumb3.png";
import showcaseBlumb4 from "../assets/imgs/blumb4.png";
import showcaseBlumb5 from "../assets/imgs/blumb5.png";
import showcaseBlumb6 from "../assets/imgs/blumb6.png";
import showcaseBlumb7 from "../assets/imgs/blumb7.png";
import showcaseBlumb8 from "../assets/imgs/blumb8.png";
import showcaseESTR1 from "../assets/imgs/estr1.png";
import showcaseESTR2 from "../assets/imgs/estr2.png";
import showcaseESTR3 from "../assets/imgs/estr3.png";
import showcaseESTR4 from "../assets/imgs/estr4.png";
import showcaseObatin1 from "../assets/imgs/obatin1.png";
import showcaseObatin2 from "../assets/imgs/obatin2.png";
import showcaseObatin3 from "../assets/imgs/obatin3.png";
import showcaseObatin4 from "../assets/imgs/obatin4.png";
import showcaseMoloco1 from "../assets/imgs/moloco1.png";
import showcaseMoloco2 from "../assets/imgs/moloco2.png";
import showcaseMoloco3 from "../assets/imgs/moloco3.png";
import showcaseMoloco4 from "../assets/imgs/moloco4.png";
import iconBlumb from "../assets/imgs/icon_blumb.png";
import iconObatin from "../assets/imgs/icon_obatin.png";
import iconMoloco from "../assets/imgs/icon_moloco.png";
import iconESTR from "../assets/imgs/icon_estr.png";
import logoAbiseka from "../assets/imgs/logo_abiseka.jpg";
import logoObatin from "../assets/imgs/logo_obatin.png";
import logoFkUnissula from "../assets/imgs/logo_fk_unissula.png";

const ImageAsset = {
    meAbidzar,
    showcasePlain,
    showcaseBlumb: (index: number)=> {
        switch (index) {
            case 1:
                return showcaseBlumb1;
            case 2:
                return showcaseBlumb2;
            case 3:
                return showcaseBlumb3;
            case 4:
                return showcaseBlumb4;
            case 5:
                return showcaseBlumb5;
            case 6:
                return showcaseBlumb6;
            case 7:
                return showcaseBlumb7;
            default:
                return showcaseBlumb8;
        }
    },
    showcaseBlumb1,
    showcaseBlumb2,
    showcaseBlumb3,
    showcaseBlumb4,
    showcaseBlumb5,
    showcaseBlumb6,
    showcaseBlumb7,
    showcaseBlumb8,
    showcaseESTR: (index: number)=>{
        switch (index) {
            case 1:
                return showcaseESTR1;
            case 2:
                return showcaseESTR2;
            case 3:
                return showcaseESTR3;
                default:
                return showcaseESTR4;
        }
    },
    showcaseESTR1,
    showcaseESTR2,
    showcaseESTR3,
    showcaseESTR4,
    showcaseObatin: (index: number)=> {
        switch (index) {
            case 1:
                return showcaseObatin1;
            case 2:
                return showcaseObatin2;
            case 3:
                return showcaseObatin3;
            default:
                return showcaseObatin4;
        }
    },
    showcaseObatin1,
    showcaseObatin2,
    showcaseObatin3,
    showcaseObatin4,
    showcaseMoloco: (index: number) =>{
        switch (index) {
            case 1:
                return showcaseMoloco1;
            case 2:
                return showcaseMoloco2;
            case 3:
                return showcaseMoloco3;
            default:
                return showcaseMoloco4;
        }
    },
    showcaseMoloco1,
    showcaseMoloco2,
    showcaseMoloco3,
    showcaseMoloco4,
    iconBlumb,
    iconObatin,
    iconMoloco,
    iconESTR,
    logoAbiseka,
    logoObatin,
    logoFkUnissula,
}

export default ImageAsset;
