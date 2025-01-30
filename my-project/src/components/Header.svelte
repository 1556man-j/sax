<script>
import {openModal } from "../store"
</script>

<header class="relative z-20 flex flex-col">
	<div class="mx-auto flex w-full max-w-[1400px] items-center justify-between p-4 py-4">
		<a href="/">
			<h1 class="font-bold">Man <span class="text-indigo-400">Jesus</span></h1>
		</a>
        <button on:click={()=> $openModal = true} class="grid place-items-center md:hidden">
            <i class="fa-solid fa-bars"></i>
        </button>
        <nav class="hidden md:flex items-center gap-4 lg:gap-6">
            <a href="#product" class="duration-200 hover:text-indigo-400 cursor-pointer">Product</a>
            <a href="#reviews" class="duration-200 hover:text-indigo-400 cursor-pointer">Reviews</a>
            <a href="#FAQs" class="duration-200 hover:text-indigo-400 cursor-pointer">FAQs</a>
            <button class="specialBtn">
                <p>Start free today</p>
            </button>
        </nav>
	</div>
</header>
