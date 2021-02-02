import * as msi from 'electron-wix-msi';
import * as path from 'path';

const APP_DIR = path.resolve(__dirname, './YoutubeApp-win32-x64')
const OUT_DIR = path.resolve(__dirname, './windows_installer')


const msiCreator = new msi.MsiCreator({
    appDirectory: APP_DIR,
    outputDirectory: OUT_DIR,
    description: 'this is a demo app',
    exe: 'YoutubeApp',
    name: 'DA APP',
    version: '1.0.0',
    ui: {
        chooseDirectory:true
    },
})


async function onBuild() {
    // Step 2: Create a .wxs template file
    await msiCreator.create();
    // Step 3: Compile the template to a .msi file
    await msiCreator.compile();
}

onBuild();
