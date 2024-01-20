

export interface NewUserRequestBody {
    _id: string;
    name: string;
    email: string;
    photo: string;
    password: string;
    dob: Date;
    gender: string;
    role: string;
}

export interface NewMovieRequestBody {
    _id: string;
    title: string;
    genre: string;
    rating: number;
    streamingLink: string;
}


export type SearchRequestQuery = {
    title?: string;
    genre?: string;
}