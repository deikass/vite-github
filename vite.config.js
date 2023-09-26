import {defineConfig, loadEnv} from "vite";

export default defineConfig(({command, mode, ssrBuild}) => {

    if (mode === "production") {
        const env = loadEnv(mode, process.cwd(), "VITE_PROD");
        console.log(env)

        return {
            base: "/vite-github/"
        }
    }

    const env = loadEnv(mode, process.cwd(), "VITE_");

    return {
        css: {
            devSourcemap: true,
        }
    };
})
