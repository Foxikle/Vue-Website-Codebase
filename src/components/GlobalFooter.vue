<template>
    <footer>
        <div className="sticky bg-gray-400 dark:bg-zinc-800 text-gray-800
         dark:text-gray-200 bottom-0 h-16">
            <h1 className="text-left pl-5 pt-4">
                © 2023 Foxikle. All Rights Reserved.
            </h1>
            <div className="flex flex-row justify-end">
                <div>
                    <a href="https://discord.com/invite/Arp6A6ue3u" target="_blank" className=" mr-6 mb-1
                    hover:text-slate-300 transition">
                        <font-awesome-icon icon="fa-brands fa-discord"/> Discord</a>
                </div>
                <div>
                    <a href="https://github.com/Foxikle"  target="_blank" className=" mr-6
                    hover:text-slate-300 transition">
                        <font-awesome-icon icon="fa-brands fa-github"/> GitHub</a>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>

export default {
  name: 'GlobalFooter',
};
</script>
