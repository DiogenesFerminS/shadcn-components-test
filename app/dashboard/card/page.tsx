import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const mockCards = [
  {
    id: 1,
    title: "Bienvenido al Curso",
    content: "Comienza tu aprendizaje con los fundamentos básicos de la programación orientada a objetos.",
    btnInfo: "Ver detalles",
    btnContinue: "Empezar"
  },
  {
    id: 2,
    title: "Suscripción Vencida",
    content: "Tu período de prueba ha finalizado. Para seguir disfrutando de todos los beneficios, por favor actualiza tu plan.",
    btnInfo: "Ahora no",
    btnContinue: "Renovar Plan"
  },
  {
    id: 3,
    title: "Eliminar Archivo",
    content: "¿Estás seguro de que deseas eliminar este elemento permanentemente? Esta acción no se puede deshacer.",
    btnInfo: "Cancelar",
    btnContinue: "Sí, eliminar"
  },
  {
    id: 4,
    title: "Nuevo Dispositivo",
    content: "Hemos detectado un inicio de sesión desde un iPhone 14 en Madrid, España.",
    btnInfo: "Fui yo",
    btnContinue: "Reportar"
  },
  {
    id: 5,
    title: "Actualización Disponible",
    content: "La versión 3.5.0 incluye mejoras de rendimiento y modo oscuro.",
    btnInfo: "Leer notas",
    btnContinue: "Actualizar"
  },
  {
    id: 6,
    title: "Sin Acción Secundaria",
    content: "Este card es para probar qué pasa si el botón de info viene vacío o nulo (render condicional).",
    btnInfo: "Info", 
    btnContinue: "Entendido"
  }
];

const Page = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
      {mockCards.map((card) => (
        <Card key={card.id}>
          <CardHeader>

            <CardTitle>{card.title}</CardTitle>
            <CardDescription>SOME DESCRIPTION</CardDescription>
            <CardAction>CARD ACTION</CardAction>

          </CardHeader>
          
          <CardContent>

            <p>{card.content}</p>

          </CardContent>

          <CardFooter>
            <div className="flex">
              <Button variant={"outline"}>{card.btnInfo}</Button>
              <Button variant={"default"}>{card.btnContinue}</Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Page;