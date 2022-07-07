import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author{
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content{
    type: string;
    content: string;
}

interface PostProps{
    author: Author;
    publishedAt: Date;
    content: Content[];
}

export function Post({ author, publishedAt, content }: PostProps) {
    const [comments, setComments] = useState([
        'Post muito bacana, hein?',        
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d' de 'LLLL' às 'HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
        
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
        
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(commentsToDelete: string){
        const commentsWithoutDeleteOne = comments.filter(comment =>{
            return comment !== commentsToDelete;
        });
        setComments(commentsWithoutDeleteOne);
    }

    const isNewCommentEmpty = newCommentText === '';

    return (
        <article className="bg-gray-800 rounded-lg mb-8 p-10">
            {/* Header do post */}
            <header className="flex justify-between">
                <div className="flex gap-4">
                    <div className="w-[calc(3rem+12px)] h-[calc(3rem+12px)]">
                        <Avatar src={author.avatarUrl} alt="Imagem do pertil do comentário"/>
                    </div>

                    <div className="flex flex-col">
                        <strong className="text-gray-100">
                            {author.name}
                        </strong>
                        <span className="text-sm text-gray-400">
                            {author.role}
                        </span>
                    </div>
                </div>
                <div>
                    <time
                        title={publishedDateFormatted}
                        dateTime={publishedAt.toISOString()}
                        className="text-sm text-gray-400"
                    >
                        {publishedDateRelativeNow}
                    </time>
                </div>
            </header>
            {/* Corpo do post*/}
            <div className="mt-6 leading-relaxed text-gray-300">
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content} className="mt-4">{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content} className="mt-4"><a className="text-green-500 font-bold hover:text-green-300 transition-colors ml-1" href="#">{line.content}</a></p>
                    }
                })}

                <p className="mt-4 flex gap-1">
                    <a
                        className="text-green-500 font-bold hover:text-green-300 transition-colors"
                        href="#"
                    >#novoprojeto</a>
                    <a
                        className="text-green-500 font-bold hover:text-green-300 transition-colors"
                        href="#"
                    >#nlw</a>
                    <a
                        className="text-green-500 font-bold hover:text-green-300 transition-colors"
                        href="#"
                    >#rocketseat</a>
                </p>
            </div>
            {/* input para fazer novo comentário */}
            <form onSubmit={handleCreateNewComment} className="flex flex-col pt-6 mt-6 border-t border-gray-600 group">
                <strong className="text-gray-100 leading-relaxed">Deixe seu feedback.</strong>
                <textarea
                    name='comment'
                    className="bg-gray-900 rounded-lg text-gray-300 leading-snug resize-none mt-4 px-4 py-3"
                    placeholder="Escreva um comentário..."
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer className="max-h-0 invisible group-focus-within:visible group-focus-within:max-h-full">
                    <button
                        className="w-[6.75rem] bg-green-500 text-white leading-tight rounded-lg pt-4 pb-3.5 px-6 mt-4 flex justify-center items-center enabled:hover:bg-green-300 disabled:opacity-70 disabled:cursor-not-allowed transition-colors "
                        type="submit"
                        disabled={isNewCommentEmpty}
                    >Publicar</button>
                </footer>
            </form>
            {/* comentários do post */}
            <div>
                {comments.map(comment => <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>)}
            </div>

        </article>
    );
}