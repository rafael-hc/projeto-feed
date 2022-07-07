import { Trash, ThumbsUp } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] =useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(state => state + 1)        
    }

    return (
        <div className="grid grid-cols-[_50px_1fr] gap-4 items-start mt-4">
            <div className="h-[3.125rem]">
                <Avatar 
                hasBorder={false} src="https://github.com/rafael-hc.png" 
                alt="Imagem do pertil do comentário"
                onClick={() => alert("Oii")}
                />
            </div>
            <div className="">
                <div className="bg-gray-600 p-4 rounded-lg">
                    <header className="flex items-start justify-between">
                        <div>
                            <strong className="text-gray-100 leading-[1.4rem] block">
                                Rafael Henrique
                            </strong>
                            <time className="text-xs text-gray-400 leading-relaxed block">
                                Cerca de 2h
                            </time>
                        </div>
                        <button
                            onClick={handleDeleteComment}
                            className="rounded-sm text-gray-400 hover:text-red-300 transition-colors"
                            title="Deletar"
                        >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p className="mt-4 text-gray-300">
                        {content}
                    </p>
                </div>
                <footer>
                    <button onClick={handleLikeComment} className="flex gap-1 mt-4 text-gray-400 rounded-sm font-bold hover:text-gray-100 transition-colors">
                        <ThumbsUp size={24} />
                        Aplaudir
                        <span className="before:px-1 before:content-['\2022']">{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}