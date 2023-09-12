<template>
    <div className="bg-slate-300 dark:bg-zinc-600 flex flex-col justify-between m-0 p-0
      text-gray-800 dark:text-gray-200 font-sans flex-wrap text-left"
      ref="content_wrapper">
      <header class="dark:bg-zinc-700 p-12 z-50">
        <h1 class="text-5xl text-center">CustomNPCs Wiki</h1>
      </header>
  <aside class="fixed h-screen left-0 pt-36 p-4 dark:bg-neutral-700">
    <nav>
      <ul>
        <li> <!--eslint-disable-next-line-->
            <a @click="scrollToSection('#introduction')" class="block py-2 hover:text-blue-500">
                Introduction
            </a>
        </li>
        <li> <!--eslint-disable-next-line-->
            <a @click="scrollToSection('#installation')" class="block py-2 hover:text-blue-500">
                Installation
            </a>
        </li>
        <li> <!--eslint-disable-next-line-->
            <a @click="scrollToSection('#configuration')" class="block py-2 hover:text-blue-500">
                Configuration
            </a>
        </li>
        <li> <!--eslint-disable-next-line-->
            <a @click="scrollToSection('#getting_started')" class="block py-2 hover:text-blue-500">
                Getting Started
            </a>
        </li>
        <li> <!--eslint-disable-next-line-->
            <a @click="scrollToSection('#commands')" class="block py-2 hover:text-blue-500">
                Commands
            </a>
        </li>
        <li> <!--eslint-disable-next-line-->
            <a @click="scrollToSection('#features')" class="block py-2 hover:text-blue-500">
                Features
            </a>
        </li>
        <li> <!--eslint-disable-next-line-->
            <a @click="scrollToSection('#troubleshooting')" class="block py-2 hover:text-blue-500">
                Troubleshooting
            </a>
        </li>
        <li> <!--eslint-disable-next-line-->
            <a @click="scrollToSection('#contributing')" class="block py-2 hover:text-blue-500">
                Contributing
            </a>
        </li>
        <li> <!--eslint-disable-next-line-->
            <a @click="scrollToSection('#license')" class="block py-2 hover:text-blue-500">
                License
            </a>
        </li>
        <li> <!--eslint-disable-next-line-->
            <a @click="scrollToSection('#support')" class="block py-2 hover:text-blue-500"
            >Support
        </a>
        </li>
      </ul>
    </nav>
  </aside>
  <hr className="w-3/5 h-1 mx-auto my-4 bg-gray-400 dark:bg-gray-700 border-0 rounded">
  <div id="introduction" class="flex-col flex justify-center p-8 pt-2 pb-10">
    <h1 class="text-4xl font-semibold m-3 text-center">
        Introduction
    </h1>
    <p class="w-2/5 self-center">
        Welcome to the CustomNPCs Wiki, your comprehensive guide to making the most of
        our powerful NPC plugin for Minecraft. Whether you're
        a seasoned server administrator or a creative player looking to enhance your gaming
        experience, CustomNPCs opens up a world of possibilities.
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        What is CustomNPCs?
    </h1>
    <p class="w-2/5 self-center">
        CustomNPCs is a feature-packed Minecraft plugin that empowers you to bring
        your worlds to life with dynamic, interactive NPCs. With this plugin, you
        can create custom characters, populate your server with unique personalities,
        and craft engaging storylines within your Minecraft universe.
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        Getting Started
    </h1>
    <p class="w-2/5 self-center">
        Whether you're a server owner looking to install and configure CustomNPCs
        or a player eager to interact with these fascinating characters, our wiki
        provides step-by-step instructions, tutorials, and in-depth documentation
        to help you make the most of this plugin.
        <br>
        <br>
        Explore the sections below to dive into the world of CustomNPCs and unlock
        the creativity and storytelling potential it offers. From installation to
        using its API, we've got you covered.
        <br>
        <br>
        Get ready to embark on an exciting journey, where your Minecraft worlds will
        come alive with the magic of CustomNPCs!
    </p>
  </div>
  <div id="installation" class="flex-col flex justify-center p-8 pt-2 pb-10">
    <h1 class="text-4xl font-semibold m-3 mb-0 text-center">
        Installing CustomNPCs
    </h1>
    <p class="italic text-sm text-center mb-3 dark:text-slate-400">
        This guide assumes that you have already setup a server.
    </p>
    <p class="w-2/5 self-center">
        Installing CustomNPCs is a straightforward process that will enable you to
        bring custom characters and interactive NPCs to your Minecraft server. Follow
        the steps below to get started:
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        Prerequisites
    </h1>
    <p class="w-2/5 self-center">
        Before you begin, make sure you have the following prerequisites in place:
    </p>
    <ol class="self-center text-left list-decimal w-2/5 list-outside">
        <li class="text">
            <strong>Minecraft Server:</strong> You must have a Minecraft server set up and running.
            CustomNPCs is designed for server use and will not work in single-player mode.
        </li>
        <li class="text">
                <strong>Paper:</strong> CustomNPCs is a Paper plugin, so you need to use the Paper
                server jar. Download Paper from their official website,
                <a href="https://papermc.io/downloads/paper" class="text-cyan-600 underline">here.</a>
        </li>
    </ol>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        Installing CustomNPCs
    </h1>
    <ol class="self-center text-left list-decimal w-2/5 list-outside">
        <li class="text">
            <strong>Download:</strong> Visit the
            <router-link to="/plugins" class="text-cyan-600 underline"> Download page</router-link>
             to download the CustomNPCs plugin file for the Minecraft version you are using.
        </li>
        <li class="text">
                <strong>Server Installation:</strong> Locate your server's "plugins" folder. This
                folder is typically found in your server directory. Move the downloaded CustomNPCs
                plugin file into the "plugins" folder.
        </li>
        <li class="text">
                <strong>Launch the Server:</strong> Start or restart your Minecraft server.
                CustomNPCs should now be loaded and ready for use.
        </li>
    </ol>
  </div>
  <div id="configuration" class="flex-col flex justify-center p-8 pt-2 pb-10">
    <h1 class="text-4xl font-semibold m-3 text-center">
        Configuring CustomNPCs
    </h1>
    <p class="w-2/5 self-center">
        CustomNPCs offers a wide range of configuration options, allowing you to tailor the
        behavior, appearance, and functionality of your NPCs to suit your server's unique needs.
        In this  section, we'll explore the key configuration aspects and how to make the most
        of them.
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        General Configuration
    </h1>
    <p class="w-2/5 self-center">
        The primary configuration file for CustomNPCs is named "config.yml" and can be found in your
        server's "plugins/CustomNPCs" folder. You can modify this file using a text editor to
        customize various aspects of the plugin. Some configurable options are:
    </p>
    <ul class="self-center text-left list-disc w-2/5 list-inside">
        <li>
            Preset NPC skins
        </li>
        <li>
            Interactable holograms (Displayed if the NPC is marked as Interactable)
        </li>
        <li>
            If the interactable holograms are shown
        </li>
    </ul>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        Default Configurations
    </h1>
    <p class="w-2/5 self-center">
        CustomNPCs includes default configurations that serve as a starting point for your server.
        You can modify these defaults to match your preferences or create entirely new
        configurations to suit specific areas of your server.
    </p>
  </div>
  <div id="getting_started" class="flex-col flex justify-center p-8 pt-2 pb-10">
    <h1 class="text-4xl font-semibold m-3 text-center">
        Getting Started
    </h1>
    <p class="w-2/5 self-center">
        Gettings started with CustomNPCs is as simple as running a command! CustomNPCs
        highly configurable nature may be a little daunting at first, but all features
        are completley optional.
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        Creating your first NPC
    </h1>
    <p class="w-2/5 self-center">
        Start by creating your first NPC. You can use the in-game command, '/npc create'
        to design characters with unique appearances and behaviors. Consider crafting NPCs
        that enhance your server's roleplay or gameplay experience
        <br>
        <br>
        From there, you will be greeted by the NPC configuration menu. You can change the
        NPC's name, skin, armor, persistence, actions, and much more!
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        Creating Actions
    </h1>
    <p class="w-2/5 self-center">
        CustomNPCs provides you with the tools to configure a wide range of actions and
        behaviors for your NPCs, allowing you to create dynamic and interactive characters.
        Whether you want NPCs to perform specific tasks, respond to player interactions, or
        trigger events, the configuration options are at your fingertips.
        <br>
        <br>
        To get started, add a new action. As of version 1.4, there are 12 action types:
        <ul class="self-center text-left list-disc list-inside w-2/5">
            <li>Run Command</li>
            <li>Display Title</li>
            <li>Send Message</li>
            <li>Send Action bar</li>
            <li>Play Sound</li>
            <li>Teleport Player</li>
            <li>Give EXP</li>
            <li>Remove EXP</li>
            <li>Give Effect</li>
            <li>Remove Effect</li>
            <li>Send to Bungeecord Server</li>
            <li>Toggle Following
                <strong class="text-red-300">
                    Warning! This is an unstable feature!
                </strong>
            </li>
        </ul>
        <br>
        <br>
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        Actions with Conditionals
    </h1>
    <p class="w-2/5 self-center mt-3">
        By far, the most powerful part of the Action api is the conditional system.
        Conditional actions allow for highly customizable and complex characters. To
        get started with adding a condition to an action, edit an action, and select
        the comparator titled 'Edit Conditionals'. From there, you can change the
        matching mode. If 'Match One' is selected, the action will be executed if
        one of the conditions is met. Otherwise all conditions must be met in order
        for the action to be executed.
    </p>
  </div>
  <div id="commands" class="flex-col flex justify-center p-8 pt-2 pb-10">
    <h1 class="text-4xl font-semibold m-3 text-center">
        Commands
    </h1>
    <p class="w-2/5 self-center">
        CustomNPCs provides a set of powerful commands that enable you to interact with and
        manage NPCs, quests, and various aspects of the plugin. Whether you're a server owner,
        administrator, or player, understanding these commands is essential for configuring and
        utilizing CustomNPCs to its full potential.
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        /npc
    </h1>
    <p class="w-2/5 self-center">
        The /npc command is your gateway to creating, modifying, and managing NPCs within
        your Minecraft world. Here are some essential /npc subcommands:
        <ul class="self-center text-left list-disc list-outside">
            <li>
                <strong>
                    /npc create:
                </strong>
                This command opens up a menu to customize an NPC.
                <Strong>
                    Note: The NPC's location is the player's location.
                </Strong>
            </li>
            <li>
                <strong>
                    /npc delete &lt;UUID&gt;:
                </strong>
                This command deletes the specified NPC.
                <strong class="text-red-300 text-sm">
                    Warning! This action cannot be undone!
                </strong>
            </li>
            <li>
                <strong>
                    /npc edit &lt;UUID&gt;:
                </strong>
                This command opens the edit menu the specified NPC.
            </li>
            <li>
                <strong>
                    /npc edit &lt;UUID&gt;:
                </strong>
                This command opens the edit menu the specified NPC. You can also edit an NPC
                by shift-right clicking an npc with the 'customnpcs.edit' permission
            </li>
            <li>
                <strong>
                    /npc reload:
                </strong>
                This command reload the plugin, configuration, and all NPCs.
            </li>
            <li>
                <strong>
                    /npc manage:
                </strong>
                This command displays a list of NPCs with buttons to delete, and modify them.
            </li>
            <li>
                <strong>
                    /npc clear_holograms:
                </strong>
                This command forcably removes all NPC holograms.
            </li>
        </ul>
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        /npcaction
    </h1>
    <p class="w-2/5 self-center">
        This command does nothing if you're not a console. This command is used internally with a
        specific format for each action. Don't play with this even if you know what you're doing.
    </p>
  </div>
  <div id="features" class="flex-col flex justify-center p-8 pt-2 pb-10">
    <h1 class="text-4xl font-semibold m-3 mb-0 text-center">
        Features of CustomNPCs
    </h1>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        The Action System
    </h1>
    <p class="w-2/5 self-center">
        CustomNPCs provides you with the tools to configure a wide range of actions and
        behaviors for your NPCs. All actions are triggered on NPC interaction (Right Click).
        Actions in their simplest form perform an action for the interacting player. However,
        the Action system provides powerful tools intended to enhance the capabilities of
        your NPCs. NPCs have a limit of 28 separate actions.
        <br>
        <br>
        To get started, add a new action. As of version 1.4, there are 12 action types:
        <ul class="self-center text-left list-disc list-inside w-2/5">
            <li>Run Command</li>
            <li>Display Title</li>
            <li>Send Message</li>
            <li>Send Action bar</li>
            <li>Play Sound</li>
            <li>Teleport Player</li>
            <li>Give EXP</li>
            <li>Remove EXP</li>
            <li>Give Effect</li>
            <li>Remove Effect</li>
            <li>Send to Bungeecord Server</li>
            <li>Toggle Following
                <strong class="text-red-300">
                    Warning! This is an unstable Action!
                </strong>
            </li>
        </ul>
    </p>
    <p class="w-2/5 self-center mt-7">
        The action's main properties can be edited withing the center of the menu.
    </p>
    <h1 class="text-xl m-3 font-semibold mt-6 text-center">
        Delay
    </h1>
    <p class="w-2/5 self-center mt-1">
        To delay and action, you can click the buttons
        in slots 3 & 5. You can view the current delay by hovering your cursor over
        slot 4 (The Clock).
    </p>
    <h1 class="text-xl m-3 font-semibold mt-6 text-center">
        Conditionals
    </h1>
    <p class="w-2/5 self-center mt-1">
        The conditional execution system within the action system is where CustomNPCs
        really shines. Conditions allow you to create interactive stories, utilities,
        and characters! To add a condition to an existing action, enter the action's
        editing menu. Click the comparator in the bottom right to enter the action's
        condition menu. You can toggle the selection mode by clicking on the candle.
        The 'ALL' mode requires all conditions to be satisfied in order to executed
        the action. The 'ONE' mode only requires one condition to be satisfied to
        execute the action.
    </p>
    <h1 class="text-xl m-3 font-semibold mt-6 text-center">
        Condition Types
    </h1>
    <p class="w-2/5 self-center mt-1">
        CustomNPCs currently supports two types of actions. Numeric conditions compare
        numeric values like statistics with a target value. The numeric values the
        plugin can currently detect are:
        <ul class="self-center text-left list-disc list-inside w-2/5">
            <li>Experience Points</li>
            <li>Experience Levels</li>
            <li>X Coordinate</li>
            <li>Y Coordinate</li>
            <li>Z Coordinate</li>
            <li>Health</li>
            <li>Absorbtion</li>
        </ul>
    </p>
    <p class="w-2/5 self-center mt-1">
        Logical conditions compare non-numeric values like gamemode or having a specific
        effect or permission with a target value. Some boolean (true/false) conditions are
        stuck into the logical catagory. These conditions don't have a target value. The
        logical values the plugin can currently detect are:
        <ul class="self-center text-left list-disc list-inside w-2/5">
            <li>Has Effect</li>
            <li>Has Permission</li>
            <li>Gamemode</li>
            <li>Is Frozen</li>
            <li>Is Flying</li>
            <li>Is Sneaking</li>
            <li>Is Gliding</li>
            <li>Is Sprinting</li>
        </ul>
    </p>
    <h1 class="text-xl m-3 font-semibold mt-6 text-center">
        Condition Comparators
    </h1>
    <p class="w-2/5 self-center mt-1">
        Condition comparators are used to compare the target value and actual value.
        <ul class="self-center text-left list-disc list-inside w-2/5">
            <li>Greater Than</li>
            <li>Greater Than or Equal To</li>
            <li>Less Than</li>
            <li>Less Than or Equal To</li>
            <li>Equal To</li>
            <li>Not Equal To</li>
        </ul>
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        Custom Skins
    </h1>
    <p class="w-2/5 self-center mt-1">
        CustomNPCs allows you to have customizable skins on the NPCs. You can pick from
        the variety of predefined skins, or add your own custom skins in the config.yml.
        To add a skin, open the config, and create a new section under the 'Skins' section.
        The title of the section should be name of the skin. DO NOT HAVE A SPACE. If you
        wish to have a space, please use an underscore '_'. From there create a field titled
        'value'. The value of the 'value' field should be the value of the skin. Then create
        another field titled 'signature'. This is where you should put the skin's signature.
        If you do not know your skin's signature you can use
        <a href="https://mineskin.org/" target="_blank" class="text-cyan-600">mineskin</a>.
    </p>

    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        NPC Resiliency
    </h1>
    <p class="w-2/5 self-center mt-1">
        CustomNPCs allows you to create NPCs that don't persist on server restarts. By defualt,
        any NPC created is persistent. Non persistent NPCs are not saved in any way, shape or form.
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        NPC Heading
    </h1>
    <p class="w-2/5 self-center mt-1">
        CustomNPCs allows you to create NPCs that face a specific direction. The NPC will
        turn to face the nearest player within 5 blocks. If no player is within range, the
        NPC will turn its head in the provided direction.
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        NPC Equipment
    </h1>
    <p class="w-2/5 self-center mt-1">
        CustomNPCs allows you to create NPCs with equipment. CustomNPCs serializes the exact item
        you provide, so all nbt data is stored. This includes custom model data, leather armor
        color, Namespaced Keys, and enchantments.
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        NPC Name
    </h1>
    <p class="w-2/5 self-center mt-1">
        CustomNPCs allows you to create NPCs with name tags greater than 16 characters. The NPC
        holograms also support chat and format codes.
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        API Support
    </h1>
    <p class="w-2/5 self-center mt-1">
        CustomNPCs comes equipped with a robust and flexible integrated API that empowers
        developers and server administrators to extend and enhance the plugin's functionality
        in innovative ways. Whether you're looking to integrate external systems, create custom
        plugins, or automate tasks, the API opens doors to boundless possibilities. For more
        information check out the <a href="https://foxikle.dev/docs/customnpcs" target="_blank" class="text-cyan-600 underline">Javadocs</a>
        and my <a href="https://repo.foxikle.dev/#/public" target="_blank" class="text-cyan-600 underline">Maven Repo</a>.
    </p>
  </div>
  <div id="troubleshooting" class="flex-col flex justify-center p-8 pt-2 pb-10">
    <h1 class="text-4xl font-semibold m-3 mb-0 text-center">
        Troubleshooting CustomNPCs
    </h1>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        Commands Not Working
    </h1>
    <p class="w-2/5 self-center mt-1">
        If you are experiencing issues with commands 'not working' please take the following
        steps before reaching out to support.
        <ul class="self-center text-left list-decimal list-inside w-2/5">
            <li>There are no errors in the server console.</li>
            <li>You have permission to run the command</li>
            <li>The plugin is enabled</li>
        </ul>
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        Plugin Not Enabling
    </h1>
    <p class="w-2/5 self-center mt-1">
        If you are experiencing issues with CustomNPCs not enabling propperly, please check your
        server's console for errors. It is likley that the issue is configuration error, not an
        error with the plugin. If you still need help, reach out to the
        <a href="https://discord.com/invite/Arp6A6ue3u" target="_blank" class="text-cyan-600 underline">Discord Server</a>.
    </p>
  </div>
  <div id="contributing" class="flex-col flex justify-center p-8 pt-2 pb-10">
    <h1 class="text-4xl font-semibold m-3 mb-0 text-center">
        Contributing to CustomNPCs
    </h1>
    <p class="w-2/5 self-center mt-1">
        If you would like to contribute to CustomNPCs, you can do so by submitting a pull request
        on <a href="https://github.com/foxikle/customnpcs" target="_blank" class="text-cyan-600 underline">Github</a>.
        I will review your change, and if I deem it to be of use to the plugin, I will accept it.
    </p>
  </div>
  <div id="license" class="flex-col flex justify-center p-8 pt-2 pb-10">
    <h1 class="text-4xl font-semibold m-3 mb-0 text-center">
        License
    </h1>
    <p class="w-2/5 self-center mt-1">
        CustomNPCs is distributed under the permissive and widely recognized MIT License. This
        open-source licensing model ensures that the plugin is accessible, modifiable, and shareable
        by the Minecraft community.
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        MIT License Overview
    </h1>
    <p class="w-2/5 self-center mt-1">
        The MIT License, also known as the Massachusetts Institute of Technology License, is a
        permissive open-source license. It allows developers, server owners, and the Minecraft
        community to:
        <ul class="self-center text-left list-decimal list-inside w-2/5">
            <li>
                <strong>Use CustomNPCs:</strong>
                You are free to use CustomNPCs for any purpose, whether for personal projects,
                server administration, or commercial use.
            </li>
            <li>
                <strong>Modify and Distribute:</strong>
                The license grants you the right to modify the plugin's source code to suit your
                specific needs. You can also distribute your modified versions.
            </li>
            <li>
                <strong>Include in Plugins and Projects:</strong>
                Integrate CustomNPCs into your plugins or projects without restrictive licensing
                concerns.
            </li>
            <li>
                <strong>No Warranty:</strong>
                The MIT License comes with no warranty. While the plugin is designed with care,
                users and contributors assume responsibility for any consequences of its use.
            </li>
        </ul>
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        Open Source Collaboration
    </h1>
    <p class="w-2/5 self-center mt-1">
        The MIT License promotes open-source collaboration and encourages the Minecraft community
        to contribute, share improvements, and create custom extensions for CustomNPCs. Whether
        you're a developer or server owner, the MIT License ensures that you have the freedom to
        tailor CustomNPCs to your liking.
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        Respect for Licensing Terms
    </h1>
    <p class="w-2/5 self-center mt-1">
        While CustomNPCs is provided under the MIT License, it's essential to respect the
        licensing terms. Ensure that you adhere to the requirements, such as retaining
        copyright notices and disclaimers, when using or redistributing the plugin.
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        Community Contributions
    </h1>
    <p class="w-2/5 self-center mt-1">
        CustomNPCs welcomes contributions from the Minecraft community. Whether it's
        code improvements, bug fixes, or feature enhancements, collaborative efforts
        enrich the plugin's capabilities for everyone.
    </p>
    <p class="w-2/5 self-center mt-1">
        By licensing CustomNPCs under the MIT License, we aim to foster a vibrant and
        creative Minecraft ecosystem where server owners, developers, and players can
        benefit from the flexibility, freedom, and accessibility that open-source
        licensing provides.
    </p>
  </div>
  <div id="support" class="flex-col flex justify-center p-8 pt-2 pb-10">
    <h1 class="text-4xl font-semibold m-3 mb-0 text-center">
        Support
    </h1>
    <p class="w-2/5 self-center mt-1">
        At CustomNPCs, we are committed to providing assistance and support to ensure
        you have the best possible experience with our plugin. Whether you're a server
        owner, developer, or player, there are various ways to access support and get
        the help you need.
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        Discord Server
    </h1>
    <p class="w-2/5 self-center mt-1">
        Join our official <a href="https://discord.com/invite/Arp6A6ue3u" target="_blank"
        class="text-cyan-600 underline">Discord Server</a> to engage in real-time discussions,
        receive quick assistance, and connect with the CustomNPCs community. Our Discord server
        is an excellent platform for getting immediate support and sharing your ideas.
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        Bug Reports
    </h1>
    <p class="w-2/5 self-center mt-1">
        If you encounter bugs or technical issues while using CustomNPCs, please report
        them on our <a href="https://github.com/foxikle/customnpcs/issues" target="_blank"
        class="text-cyan-600 underline">Issue Tracker</a>. You can also open a ticket in the Discord
        Server under the "Bug Report" catagory. Detailed bug reports help our developers
        identify and address problems effectively.
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        Feature Request
    </h1>
    <p class="w-2/5 self-center mt-1">
        Have ideas for new features or enhancements? Share your suggestions in the form of
        a <a href="https://github.com/foxikle/customnpcs/issues" target="_blank"
        class="text-cyan-600 underline">GitHub issue</a> with the tag feature request. You can
        also open a ticket in the Discord Server under the "Feature Request" catagory. Detailed
        feature requests help our developers implement desired features.
    </p>
    <h1 class="text-2xl m-3 font-semibold mt-6 text-center">
        Aknowledgements
    </h1>
    <p class="w-2/5 self-center mt-3">
            Thank you for being a part of the CustomNPCs journey. Your
            support and dedication are deeply appreciated. It makes my
            day knowing that you chose my plugin to use. I appreciate
            everyone who reaches out asking for support.
        </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'CustomNPCsWiki',
  mounted() {
    document.title = 'CustomNPCs Wiki';
  },
  methods: {
    scrollToSection(target) {
      const targetId = target.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>
