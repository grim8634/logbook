VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
    config.vm.box = "debian/jessie64"

    #versions newer than this use rsync to share the vagrant folder. not cool
    config.vm.box_version = '8.2.1'

    config.vm.hostname = "dev.logbook"
    config.ssh.forward_agent = true
    config.hostmanager.enabled = true
    config.hostmanager.manage_host = true
    config.vm.network "private_network", ip: "192.168.53.21"
    
    config.vm.provision "shell",
        path: "vagrant/setup.sh",
        privileged: false
end
