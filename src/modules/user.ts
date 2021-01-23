import axios                     from "axios";
import { reactive, toRefs, }      from "vue";

export default function useUser() {
    const state = reactive({
        error: null,
        user: {}
    })

    const load = async() => {
        try {
            const { data } = await axios.get( 'https://randomuser.me/api/' );

            state.user = {
                photo: data.results[ 0 ].picture.thumbnail,
                name: `${ data.results[ 0 ].name.first} ${ data.results[ 0 ].name.last }`
            }
        } catch( e ) {
            state.error = e;

            throw e;
        }
    }

    return { ...toRefs( state ), load };
}
