{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
  NIX_SHELL = "meshcloud-cloudfoundation";
  shellHook = ''
    echo starting meshcloud cloudfoundation shell
  '';

  buildInputs = [
    # node / typescript (meshPanel, utilities eetc.)
    pkgs.yarn

    pkgs.terraform
    pkgs.awscli2

    # currently not possible to override nodejs, see https://github.com/NixOS/nixpkgs/issues/151868
    # pkgs.google-clasp 
    # pkgs.google-cloud-sdk
  ];
}
