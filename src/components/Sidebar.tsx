import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
    return (
        <aside className="bg-gray-800 rounded-lg overflow-hidden">
            <img
                className="w-full h-[72px] object-cover"
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
                alt="Imagem do pertil do comentário"
            />
            <div className="flex flex-col items-center -mt-[calc(1.5rem+6px)] ">
                <div className="w-[calc(3rem+12px)] h-[calc(3rem+12px)]">
                    <Avatar src="https://github.com/rafael-hc.png" alt="Imagem do pertil do comentário"/>
                </div>

                <strong
                    className="mt-4 text-gray-100 leading-relaxed"
                >
                    Rafael Henrique
                </strong>
                <span
                    className="text-sm text-gray-400 leading-relaxed"
                >
                    Web Developer
                </span>
            </div>
            <footer className="border-t border-gray-600 mt-6 pt-6 px-8 pb-8">
                <a
                    className="h-[50px] bg-transparent text-green-500 border border-green-500 rounded-lg font-bold flex items-center justify-center gap-2.5 hover:bg-green-500 hover:text-white transition-colors"
                    href="#"
                >
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}