/*
_______________________________
che, en mi app existen estas tres pantallas 
_______________________________
*/

export type RootTabParamList = {
  Inicio: undefined;
  Buscar: undefined;
  Perfil: undefined;
};

// Stack interno 
export type HomeStackParamList = {
  Lista: undefined;
  Detalle: { id: number };
};