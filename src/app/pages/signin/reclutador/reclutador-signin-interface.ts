import { ImagenInterface } from 'src/app/pages/tools/general-interface';

export interface ReclutadorSigninRequest {
    emailUsuario: string;
    contraseñaUsuario: string;
}

export interface ReclutadorAuthorityResponse {
    authority: string;
}

export interface ReclutadorSigninResponse {
    type: string;
    token: string;
    idReclutador: bigint;
    emailReclutador: string;
    basicinfoReclutador: ReclutadorBasicInfoResponse;
    authorities: ReclutadorAuthorityResponse[];
}

export interface ReclutadorBasicInfoResponse {
    nombreReclutador: string;
    ciudadReclutador: string;
    tipodocumentoReclutador: string;
    numerodocumentoReclutador: string;
    telefonoReclutador: string;
    fecharegistroReclutador: Date;
    contactanteReclutador: string;
    tamañoempresaReclutador: string;
    logoempresaReclutador: ImagenInterface;
}