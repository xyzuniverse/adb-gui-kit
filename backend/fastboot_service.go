package backend

import (
	"fmt"
)
func (a *App) WipeData() error {
	output, err := a.runCommand("fastboot", "-w")
	if err != nil {
		return fmt.Errorf("failed to run fastboot -w: %w. Output: %s", err, output)
	}
	return nil
}

func (a *App) FlashPartition(partition string, filePath string) error {
	if partition == "" || filePath == "" {
		return fmt.Errorf("partition and file path cannot be empty")
	}

	output, err := a.runCommand("fastboot", "flash", partition, filePath)
	if err != nil {
		return fmt.Errorf("failed to run fastboot flash: %w. Output: %s", err, output)
	}
	return nil
}

func (a *App) GetFastbootTest() (string, error) {
    output, err := a.runCommand("fastboot", "getvar", "product")
    if err != nil {
        return "", err
    }

    return output, nil
}
