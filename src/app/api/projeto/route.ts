import { NextResponse } from 'next/server';

let projetos = [
    {id: 1, name: 'Flutterflow', description: 'Uso de Flutterflow para criar um app para uma empresa de eventos'},
    {id: 2, name: 'Django', description: 'Uso de Django para criar um banco de dados, guardando informações de membros de uma empresa'},
    {id: 3, name: 'Next', description: 'Uso de Next para criar um site para fazer um portifólio'},
];

export async function GET() {
    return NextResponse.json(projetos);
}


    